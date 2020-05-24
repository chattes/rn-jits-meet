import React from 'react';
import {View, Text} from 'react-native';
import JitsiMeet, {JitsiMeetView} from 'react-native-jitsi-meet';

class VideoCall extends React.Component {
  constructor(props) {
    super(props);
    this.onConferenceTerminated = this.onConferenceTerminated.bind(this);
    this.onConferenceJoined = this.onConferenceJoined.bind(this);
    this.onConferenceWillJoin = this.onConferenceWillJoin.bind(this);
  }

  componentDidMount() {
    console.log(
      'Sourav Logging:::: Joining Conference',
      this.props.route?.params?.link,
    );
    setTimeout(() => {
      const url = `https://meet.jit.si/${this.props.route?.params?.link}`;
      const userInfo = {
        displayName: 'MobileUser',
        email: 'gooner.sourav@gmail.com',
        avatar: 'https://en.gravatar.com/avatar/chattes81',
      };
      JitsiMeet.call(url, userInfo);

      /* You can also use JitsiMeet.audioCall(url) for audio only call */
      /* You can programmatically end the call with JitsiMeet.endCall() */
    }, 0);
  }

  onConferenceTerminated(nativeEvent) {
    /* Conference terminated event */
    console.log('Sourav Logging:::: TERMINATED CONFERENCE');
  }

  onConferenceJoined(nativeEvent) {
    /* Conference joined event */
    console.log('Sourav Logging:::: JOINED CONFERENCE', nativeEvent);
  }

  onConferenceWillJoin(nativeEvent) {
    /* Conference will join event */
    console.log('Sourav Logging:::: JOINING CONFERENCE', nativeEvent);
  }

  render() {
    if (!this.props.route.params) {
      return <View />;
    }
    return (
      <JitsiMeetView
        onConferenceTerminated={this.onConferenceTerminated}
        onConferenceJoined={this.onConferenceJoined}
        onConferenceWillJoin={this.onConferenceWillJoin}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
        }}
      />
    );
  }
}

export default VideoCall;
