import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

class Tab3Screen extends Component {
  
  render() {
    const hideHeader = "var h=document.getElementsByClassName('app-header-container')[0]; h.style.display='none';";
    const hideFooter = "var f=document.getElementsByClassName('app-footer')[0]; f.style.display='none';";
    const injectJS = hideHeader+hideFooter;
    
    return (
      <WebView
        source={{ uri: "https://www.blackdoors.com/zh-tw" }}
        onLoadProgress={e => console.log(e.nativeEvent.progress)}
        injectedJavaScript={injectJS}
        useWebkit={true}
      />
    );
  }
}

export default Tab3Screen;
