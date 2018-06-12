import React from 'react'
import './materialize.css'

const BookDetails = (props) => {
  return (
    <div>
      <a class="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>
    
      <div id="modal1" className="modal open">
        <div className="modal-content">
          <h4>{props.title}</h4>
          <p>{props.description}</p>
        </div>
        <div className="modal-footer">
          <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
        </div>
      </div>
    </div>
  )
}

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems, options);
});
 
export default BookDetails