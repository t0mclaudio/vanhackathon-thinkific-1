/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';

import { convertSecondsToInt, convertSecondsToTime } from '../Components/Player/helper';

export const PlayerContext = React.createContext();

const getEmail = {
  question: 'To continue, type in your email address',
  answer: '',
  type: 'identification',
  time: 1,
  elapsed: '00:00:01',
  email: true,
};

export class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerRef: React.createRef(),
      url: '',
      title: '',
      description: '',
      isInfoSet: false,
      playing: false,
      currentSecond: 0,
      elapsed: '00:00:00',
      played: 0,
      isComposing: false,
      time: {},
      activeInModal: 'A',
      questions: [getEmail],
      question: {},
      currentModule: 'A',
      createMode: true,
      prompt: false,
    };
  }

  setCreateMode = () => this.setState({ createMode: true });

  setViewMode = () => this.setState({ createMode: false });

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((state) => ({ ...state, [name]: value }));
  }

  handleInfoSubmit = (e) => {
    e.preventDefault();
    this.setState({ isInfoSet: true });
  };

  play = () => {
    this.setState({ playing: true });
  }

  pause = () => {
    this.setState({ playing: false });
  }

  onProgress = (state) => {
    const { createMode } = this.state;
    const { played, playedSeconds } = state;
    const currentSecond = convertSecondsToInt(playedSeconds);
    this.timeElapsed(currentSecond, played);
    if (!createMode) this.checkIfQuestion(currentSecond);
  }

  timeElapsed = (currentSecond, played) => {
    this.setState({
      currentSecond,
      elapsed: convertSecondsToTime(currentSecond),
      played,
    });
  }

  checkIfQuestion = (currentSecond) => {
    const { questions, playerRef } = this.state;
    const question = questions.find((q) => q.time === currentSecond);
    if (question) {
      this.pause();
      playerRef.current.seekTo(currentSecond);
      this.openPrompt();
      this.setState({ question });
    }
  }

  handleSeekChange = (e) => {
    const to = parseFloat(e.target.value);
    this.setState({ played: to });
  }

  handleSeekMouseUp = (e) => {
    const { playerRef } = this.state;
    const to = parseFloat(e.target.value);
    playerRef.current.seekTo(to);
  }

  handleInsertClick = () => {
    this.pause();
    this.setState({ isComposing: true });
  }

  updateModalModule = (id) => {
    this.setState({ activeInModal: id });
  }

  handleSubmit = (data) => {
    const { questions } = this.state;
    // To Refactor: Checks if duplipate entry in time
    if (questions.find((q) => q.time === data.time)) {
      const index = questions.findIndex((q) => q.time === data.time);
      questions[index] = data;
    } else {
      questions.push(data);
    }

    // sorts the questions
    questions.sort((a, b) => a.time - b.time);
    this.setState({ questions });
    this.closeComposer();
  }

  closeComposer = () => {
    this.setState({ isComposing: false, activeInModal: 'A' });
  }

  openPrompt = () => this.setState({ prompt: true });

  closePrompt = () => this.setState({ prompt: false });

  render() {
    // eslint-disable-next-line react/prop-types
    const { children } = this.props;
    const actions = {
      handleChange: this.handleChange.bind(this),
      handleInfoSubmit: this.handleInfoSubmit.bind(this),
      onProgress: this.onProgress.bind(this),
      play: this.play.bind(this),
      pause: this.pause.bind(this),
      handleSeekChange: this.handleSeekChange.bind(this),
      handleSeekMouseUp: this.handleSeekMouseUp.bind(this),
      handleInsertClick: this.handleInsertClick.bind(this),
      handleSubmit: this.handleSubmit.bind(this),
      updateModalModule: this.updateModalModule.bind(this),
      closeComposer: this.closeComposer.bind(this),
      setCreateMode: this.setCreateMode.bind(this),
      setViewMode: this.setViewMode.bind(this),
      closePrompt: this.closePrompt.bind(this),
    };
    return (
      <PlayerContext.Provider value={{ ...this.state, actions }}>
        {children}
      </PlayerContext.Provider>
    );
  }
}

export const { Consumer } = PlayerContext;
