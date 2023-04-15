import {Component} from 'react'
import './index.css'
import SlideListItem from '../SlideListItem'
import SlidesContext from '../../Context'
import Slide from '../Slide'

class Slides extends Component {
  render() {
    return (
      <SlidesContext.Consumer>
        {value => {
          const {initialList} = value
          return (
            <div className="slides-container">
              <ol className="slides-list">
                {initialList.map((eachSlide, index) => (
                  <SlideListItem
                    details={eachSlide}
                    key={eachSlide.id}
                    serialNumber={index + 1}
                  />
                ))}
              </ol>
              <Slide />
            </div>
          )
        }}
      </SlidesContext.Consumer>
    )
  }
}

export default Slides
