const Routes = () => (
  <div>
    <Route path="/home"><Header/></Route>
    <Route path="/about"><About/></Route>
    <Route path="/menu"><Main/></Route>
    <Route path="/reservations"><Main/></Route>
    <Route path="/order"><Main/></Route>
    <Route path="/login"><Header/></Route>
  </div>
)

export default Routes;