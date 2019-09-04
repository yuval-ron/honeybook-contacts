import React, {Component} from 'react'

export default class ContactItem extends Component {
  render() {
    const {
      contact: {
        profile_image,
        name,
        company_name,
        email,
        icon,
        job,
        phone
      }
    } = this.props

    const profilePictureStyle = {backgroundImage: `url(${profile_image})`}
    const iconStyle = {backgroundImage: `url(${icon})`}

    return (
      <div className="contact-item-container">
        <div className="profile-picture" style={profilePictureStyle}></div>
        <div className="details">
          <div className="icon" style={iconStyle}></div>
          <div className="fullname">{name}</div>
          <div className="job-details">
            <div className="job-title">{job}</div>
            {job && company_name && <div className="separator"></div>}
            <div className="company-name">@{company_name}</div>
          </div>
        </div>
      </div>
    )
  }
}
