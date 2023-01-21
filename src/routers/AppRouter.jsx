import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from '../components/Header'
import Home from '../pages/Home'
import BlogDetails from '../pages/BlogDetails'
import BlogList from '../pages/BlogList'
import NotFoundPage from '../pages/NotFoundPage'
import Dashboard from '../pages/admin/Dashboard'
import EditBlog from '../pages/admin/uptade/EditBlog'
import AddBlog from '../pages/admin/uptade/AddBlog'
// import Login from '../pages/auth/Login'


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
        <Container>
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/blogs" exact component={BlogList}></Route>
            <Route path="/blogs/:id" component={BlogDetails}></Route>
            <Route path="/login" component={Dashboard}></Route>
            <Route path="/admin" component={Dashboard}></Route>
            <Route path="/add" component={AddBlog}></Route>
            <Route path="/edit/:id" component={EditBlog}></Route>
            <Route  component={NotFoundPage}></Route>
          </Switch>
      </Container>
    </BrowserRouter>
  )
}

export default AppRouter


