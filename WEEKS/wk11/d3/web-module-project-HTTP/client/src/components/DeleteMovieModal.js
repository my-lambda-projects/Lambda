// import React from 'react';
//
// const DeleteMovieModal = () => {
//     return (<div id="deleteEmployeeModal">
//         <div className="modal-dialog">
//             <div className="modal-content">
//                 <form>
//                     <div className="modal-header">
//                         <h4 className="modal-title">Delete Employee</h4>
//                         <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
//                     </div>
//                     <div className="modal-body">
//                         <p>Are you sure you want to delete these Records?</p>
//                         <p className="text-warning"><small>This action cannot be undone.</small></p>
//                     </div>
//                     <div className="modal-footer">
//                         <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel"/>
//                         <input type="submit" className="btn btn-danger" value="Delete"/>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     </div>)
// }
//
// export default DeleteMovieModal;
import React from "react";

const DeleteMovieModal = (props) => {
  const { setModal, deleteMovie, push, id } = props;

  const handleCancel = () => {
    setModal(false);
  };

  const handleDelete = () => {
    deleteMovie(id);
    push("/movies");
    setModal(false);
  };

  return (
    <div id="deleteMovieModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <form>
            <div className="modal-header">
              <h4 className="modal-title">Delete Movie</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-hidden="true"
              >
                &times;
              </button>
            </div>
            <div className="modal-body">
              <p>Are you sure you want to delete these records?</p>
              <p className="text-warning">
                <small>This action cannot be undone.</small>
              </p>
            </div>
            <div className="modal-footer">
              <input
                type="button"
                className="btn btn-default"
                data-dismiss="modal"
                value="Cancel"
                onClick={handleCancel}
              />
              <input
                type="submit"
                className="btn btn-danger"
                value="Delete"
                onClick={handleDelete}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DeleteMovieModal;
