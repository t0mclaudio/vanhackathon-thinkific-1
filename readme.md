# Vanhackathon 2019 | CHOOSE YOUR OWN ADVENTURE VIDEO MAKER

Demo:
[https://create-your-own-adventure-01.netlify.com/](https://create-your-own-adventure-01.netlify.com/) 

## How to use
* Enter basic info and a valid video URL
* Scrub through timeline and click paper icon to insert a question
* Enter question
* Click on green view button on upper right to view interactive video - it appears only if there's atleast one question


## Technologies
* React 16
* Firebase

## Use Cases
* Creator enters YT link, Title, and Description
* Creator scrubs through timeline and chooses a part where to insert prompt
* Creator upon click on the timeline opens a question composer
* Creator enters her/his questions
* Creatpr views interactive video
* Creator gets code for embed

## Basic Specs
- [x] Should work with videos hosted on site like Wistia or Youtube
- [x] Should allow creators to prompt viewers with a question
- [x] Prompt should be possible at any video time specified by the creator
- [x] Prompt should allow space for a question, and between 2 and 6 text responses
- [ ] For each response, the behavior can be to resume playback, or link to another URL
- [x] Prompt and responses overlaid on video.
- [x] The interactive video link can be embedded into another page using HTML and a simple URL

## Stretch Specs
- [ ] Custom design (positioning, images for options)
- [x] Collect an email to keep playing the video
- [ ] Tweet/share on facebook/linked in to continue playing video
- [ ] Allow responses to trigger files downloads (.pdf, .txt, .xls)
- [ ] Creator can see results of which responses people choose
- [ ] Show the results of polls to viewers after they select a response
- [ ] Anything else that makes it fun and engaging

## Next Steps
* Use state management like Redux or Context
* Validations
* MORE Test Cases!!!!
* Improve usability
* Improve navigation

## Challenges
1. Use YT in a HTML5 video tag
2. Interact with YT IFRAME API
3. Create YT Player component
4. Handle 2 formats YT and Wistia
5. Learn controls to play, pause, stop, replay, go to

## How to use
* Fork the repo
* Install packages
```
npm install
```
* Start project
```
npm start
```
* Build project
```
npm run build
```
