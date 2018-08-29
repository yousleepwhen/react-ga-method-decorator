### react-ga-method-decorator
This module is helps you use the `event` method of `react-ga` as decorator pattern.  
`GA initialize` should be called first.

>[react-ga] ReactGA.initialize must be called first or GoogleAnalytics should be loaded manually.

#### Install
```javascript
npm install react-ga-method-decorator --save
```

#### Example
```javascript
import { gaEvent } from 'react-ga-method-decorator'

class TestComponent extends React.Component<TestProps, TestState> {
  constructor(props){
    super(props)
    this.onClickSayHello = this.onClickSayHello.bind(this)
  }

  @gaEvent({ category: 'Test', action: 'Click SayHello'})
  onClickSayHello() {
    console.log('Hello')
  }
}
```


It behaves similar to the following:
```javascript
import * as ReactGA from 'react-ga'

class TestComponent extends React.Component<TestProps, TestState> {
  constructor(props){
    super(props)
    this.onClickSayHello = this.onClickSayHello.bind(this)
  }

  onClickSayHello() {
    console.log('Hello')
    ReactGA.event({ category: 'Test', action: 'Click SayHello'})
  }
}

```