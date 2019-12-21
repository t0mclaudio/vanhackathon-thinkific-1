/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';

import { convertSecondsToInt, convertSecondsToTime } from '../Components/Player/helper';

export const PlayerContext = React.createContext();

export class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      questions: [],
      currentModule: 'A',
      createMode: true,
    };
  }

  setCreateMode = (status) => this.setState({ createMode: status });

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

  onProgress = (state, ref) => {
    const { createMode } = this.state;
    const { played, playedSeconds } = state;
    const currentSecond = convertSecondsToInt(playedSeconds);
    this.timeElapsed(currentSecond, played);
    if (!createMode) this.checkIfQuestion(currentSecond, ref);
  }

  timeElapsed = (currentSecond, played) => {
    this.setState({
      currentSecond,
      elapsed: convertSecondsToTime(currentSecond),
      played,
    });
  }

  checkIfQuestion = (currentSecond, ref) => {
    const { questions } = this.state;
    if (questions.find((q) => q.time === currentSecond)) {
      this.pause();
      ref.current.seekTo(currentSecond);
    }
  }

  handleSeekChange = (e) => {
    const to = parseFloat(e.target.value);
    this.setState({ played: to });
  }

  handleSeekMouseUp = (e, ref) => {
    const to = parseFloat(e.target.value);
    ref.current.seekTo(to);
  }

  handleInsertClick = () => {
    this.pause();
    this.setState({ isComposing: true });
  }

  updateModalModule = (id) => {
    this.setState({ activeInModal: id });
  }

  handleSubmit = (data) => {
    let { questions } = this.state;
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

  // const reportTime = () => {
  //   const { currentSecond, elapsed } = this.state;
  //   return {
  //     currentSecond,
  //     elapsed,
  //   };
  // }

  // openComposer() {
  //   this.player.current.pause();
  //   this.setState({
  //     isComposing: true,
  //     time: this.player.current.reportTime(),
  //   });
  // }

  // handleInsertClick(time) {
  //   this.openComposer()
  // }

  // handleViewVideo() {
  //   this.props.handleViewVideo(this.state)
  // }

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
    };
    return (
      <PlayerContext.Provider value={{ ...this.state, actions }}>
        {children}
      </PlayerContext.Provider>
    );
  }
}

export const { Consumer } = PlayerContext;
