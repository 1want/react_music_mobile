// import { Button } from 'antd-mobile'
import { Button, WhiteSpace, WingBlank } from 'antd-mobile'
function App() {
  return (
    <div className='App'>
      <WingBlank>
        <Button>default</Button>
        <WhiteSpace />
        <Button disabled>default disabled</Button>
        <WhiteSpace />

        <Button type='primary'>primary</Button>
        <WhiteSpace />
        <Button type='primary' disabled>
          primary disabled
        </Button>
        <WhiteSpace />
      </WingBlank>
    </div>
  )
}

export default App
