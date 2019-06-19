import React from 'react'

export default function childCarouselComponent() {
    return (
        <li>
            <div>
             <img src={this.props.urlImage} alt={this.props.id}  />     
            </div>
        </li>
    )
}
