import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client'
import axios from 'axios'

const client = new ApolloClient({
    uri: 'http://localhost:4000', 
    cache: new InMemoryCache()
})

const URI = 'http://localhost:4000'

export function login(username, password, role) {
    return new Promise((resolve, reject) => {
        client.mutate({
            mutation: gql`
                mutation {
                    login(username: "${username}", password: "${password}", role: "${role}") {
                        _id
                        firstname 
                        lastname 
                        username 
                        token
                    }
                }
            `
        }).then(result => {
            resolve(result.data.login)
        }).catch(err => {
            reject(err.message)
        })
    })
}

export function getCourses(user) {
    return new Promise((resolve, reject) => {
        axios.post(URI, {
            query: `
                query {
                    courses {
                        _id
                        course_name
                    }
                }
            `
        }, {
            headers: {
                token: user.token
            }
        }).then(result => {
            resolve(result.data.data.courses)
        }).catch(err => {
            reject(err)
        })
    })
}

export function getCourse(user, id) {
    return new Promise((resolve, reject) => {
        axios.post(URI, {
            query: `
                query {
                    course(_id: "${id}") {
                        _id
                        course_name 
                        course_home_html
                        modules {
                            _id 
                            module_name
                            assignments {
                                _id
                                assignment_name 
                            }
                            posts {
                                _id
                                post_name
                            }
                        }
                    }
                }
            `
        }, {
            headers: {
                token: user.token
            }
        }).then(result => {
            resolve(result.data.data.course)
        }).catch(err => {
            reject(err)
        })
    })
}
