import React from 'react';
import './PostView.model.css'



export default class PostView extends React.Component {

render(){
  return (
    <>
    <div class="wrapper">
  <h1>Moives!</h1>
</div>
    <form>
      <ul class="form-style-1">
  <label>Moive's Name<span class="required">*</span></label>
  <input type="text" name="Name" class="field-long" placeholder="First" />
  <li>
      <label>Movies's Image <span class="required">*</span></label>
      <input type="email" name="image" class="field-long" />
  </li>
  <li>
    <label>Subject</label>
    <select name="field4" class="field-select">
    <option value="popular">Popular Movies</option>
    <option value="trending">Trending Movies</option>
    <option value="tv">TV Show</option>
    <option value="action">Action Movies</option>
    <option value="originals">Originals Movies</option>
    </select>
  </li>
  <li>
      <label>Description<span class="required">*</span></label>
      <textarea name="field5" id="description" class="field-long field-textarea"></textarea>
  </li>
  <li>
      <button type="submit" value="Submit" class="btn draw-border">Submit</button>
  </li>
      </ul>
    </form>
    </>
  )
  }
}
