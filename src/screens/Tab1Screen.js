import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

class Tab1Screen extends Component {
  
  render() {
    const hideFooter = "var f=document.getElementsByClassName('app-footer')[0]; f.style.display='none';";
    
    return (
      <WebView
        source={{ uri: "https://www.blackdoors.com/zh-tw" }}
        style={{ marginTop: 40 }}
        onLoadProgress={e => console.log(e.nativeEvent.progress)}
        injectedJavaScript={hideFooter}
        useWebkit={true}
      />
    );
  }
}

export default Tab1Screen;
