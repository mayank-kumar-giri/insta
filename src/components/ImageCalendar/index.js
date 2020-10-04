import React, { PureComponent } from 'react';
import Calendar from 'react-calendar';
import './calendar.css';
import 'react-calendar/dist/Calendar.css';
import request from '../../utils/request.js';
import { isEmpty, isNil, formatDate, postSortCompare } from '../../utils/utils';
import moment from 'moment';

const POSTS_API = 'https://quinncareapi.azurewebsites.net/api/assignment/posts';

const findFirstPost = (sortedPosts, timeInSeconds) => {
  if(isNil(sortedPosts) || isEmpty(sortedPosts) || timeInSeconds<0) return -1;

  const n = sortedPosts.length;
  var l = 0;
  var r = n-1;
  
  while(l<=r) {
    var mid = parseInt(String((l+r)/2));
    
    if(sortedPosts[mid].timeInSeconds < timeInSeconds) l = mid + 1;
    else if(sortedPosts[mid].timeInSeconds > timeInSeconds) r = mid - 1;
    else return mid;
  }

  return -1;
}

class ImageCalendar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      calDate: new Date(),
      isShowingImageModal: false,
      posts: [],
    };
  }

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts = () => {
    request.get(POSTS_API)
      .then(({data}) => {
        data.forEach((post, index) => {
          data[index]["timeInSeconds"] = moment(formatDate(post.CreatedOnTimestamp, 10), 'YYYY-MM-DD').unix();
        });
        this.setState({
          posts: data.sort(postSortCompare),
        });
      })
      .catch(error => {
        alert("API call failed!");
        console.log(error);
      });
  }
 
  renderExpandedImageModal = () => {
    return (
      <h1>The Expandables :p</h1>
    );
  }

  showExpandedImageModal = () => {
    this.setState({
      isShowingImageModal: true,
    });
  }

  resetAction = () => {
    this.setState({
      isShowingImageModal: false,
    });
  }

  onChange = (calDate) => {
    this.setState({
      calDate: calDate,
    });
  }

  renderDateTileContent = ({ date, view }) => {
    const { posts } = this.state;
    if(isNil(posts) || isEmpty(posts)) return null;
    const tileDate = formatDate(date.toISOString(), 10);
    const tileTimeInSeconds = moment(tileDate, 'YYYY-MM-DD').unix();
    const firstPostIndex = findFirstPost(posts, tileTimeInSeconds);
    
    if ((firstPostIndex === -1) && (view === 'month')) return (
      <div className="date-image">
        <img src={"https://www.vhv.rs/dpng/d/102-1021069_empty-open-box-png-transparent-png.png"}/>
      </div>
    );
    const firstPost = posts[firstPostIndex];

    return (view === 'month')
              ? (
                  <div className="date-image">
                    <img src={firstPost.Images[0]["ImageUrl"]} alt={firstPost.UserId} key={tileDate}/>
                  </div>
                )
              : null;
  }

  render() {
    const {
      calDate,
      isShowingImageModal,
    } = this.state;

    return (
      <React.Fragment>
        {isShowingImageModal && this.renderExpandedImageModal()}
        <div className="result-calendar">
          <Calendar
            onChange={this.onChange}
            value={calDate}
            tileContent={this.renderDateTileContent}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default ImageCalendar;
