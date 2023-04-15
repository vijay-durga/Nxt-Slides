import {v4 as uuidv4} from 'uuid'
import './index.css'
import SlidesContext from '../../Context'

const NewButton = () => (
  <SlidesContext.Consumer>
    {value => {
      const {addNewItem, activeIndex, changeActiveTab} = value

      const onClickAddButton = () => {
        const id = uuidv4()
        const item = {
          id,
          heading: 'Heading',
          description: 'Description',
        }
        addNewItem(item)
        changeActiveTab(activeIndex + 1)
      }

      const onDoubleClickBtn = () => {
        console.log('Hi')
      }

      return (
        <div>
          <button
            type="button"
            className="add-new-button"
            onClick={onClickAddButton}
            onDoubleClick={onDoubleClickBtn}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png"
              alt="new plus icon"
              className="plus-icon"
            />
            New
          </button>
        </div>
      )
    }}
  </SlidesContext.Consumer>
)
export default NewButton
