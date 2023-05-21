import API_ENDPOINT from '../globals/api-endpoint';
import UrlParser from '../routes/url-parser';

class AddReviewHandler {
  constructor() {
    this.reviewData = [null, null];
  }

  formView = () => `
    <form class="add-review">
      <h3 tabindex="0">Add Review</h3>
      <div>
        <label for="name">Name</label>
        <input type="text" class="form-control" id="reviewer_name" placeholder="Enter Your Name" isRequired>
      </div>
      <div>
        <label for="review">Review</label>
        <textarea class="form-control" id="review" cols="30" rows="10" placeholder="Enter Your Review" isRequired></textarea>
      </div>
      <p class="err-message" id="errMessage"></p>
      <button type="submit" class="btn" id="add_review_btn">Submit</button>
    </form>
  `;

  setReviewerName = (e) => {
    const reviewerName = e.target.value || null;
    console.log(reviewerName);
    this.reviewData[0] = reviewerName;
  };

  setReview = (e) => {
    const review = e.target.value || null;
    this.reviewData[1] = review;
  };

  handleAddReview = async (e) => {
    e.preventDefault();
    if (this.reviewData[0] === null) {
      document.getElementById('errMessage').textContent = 'Oppss.. Jangan lupa masukan Nama kamu';
      document.getElementById('reviewer_name').focus();
    } else if (this.reviewData[1] === null) {
      document.getElementById('errMessage').textContent = 'Oppss.. Jangan lupa masukan Review kamu';
      document.getElementById('review').focus();
    } else {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const bodyReq = {
        "id": url.id,
        "name": this.reviewData[0],
        "review": this.reviewData[1]
      }
      const response = await fetch(API_ENDPOINT.ADD_REVIEW, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bodyReq),
      });
      console.log(response.status);
    }
  };

  addEvent() {
    setTimeout(() => {
      document.getElementById('reviewer_name').addEventListener('change', this.setReviewerName);
      document.getElementById('review').addEventListener('change', this.setReview);
      document.getElementById('add_review_btn').addEventListener('click', this.handleAddReview);
    }, 600);
  }
}

export default AddReviewHandler;
