import React, { Component } from 'react'
import { connect } from 'react-redux'

class LeaderBoard extends Component{
  render(){
    const { users } = this.props

    const sortedUsers = Object.entries(users).sort((a, b) => (
      (Object.keys(b[1].answers).length + Object.keys(b[1].questions).length)
        - (Object.keys(a[1].answers).length + Object.keys(a[1].questions).length)
    ))

    return (
      <div>
      {sortedUsers.map((user) => (
        <div key={user[1].id} className='score-item-container'>
          <div className='question-avatar'>
            <img
              className='avatar'
              src={user[1]["avatarURL"]}
              alt={user[1]["name"]} />
          </div>
          <div className='question-header'>{user[1]["name"]}</div>
          <div className='question-main'>
            <div>
              <p className="alignleft">Answered questions</p>
              <p className="alignright">{Object.keys(user[1].answers).length}</p>
            </div>

            <div>
              <p className="alignleft">Created question</p>
              <p className="alignright">{Object.keys(user[1].questions).length}</p>
            </div>
          </div>

          <div className='score-container'>
            <div className='score'>
              <div className='score-header'>Score</div>
              <div className='circle'>
                {Object.keys(user[1].questions).length + Object.keys(user[1].answers).length}
              </div>
            </div>
          </div>
        </div>
      ))}
      </div>
    )
  }
}

function mapStateToProps({users}){

  return {
    users
  }
}

export default connect(mapStateToProps)(LeaderBoard)
