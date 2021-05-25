function renderPosts(allEntries) {
  $(".code-modal").on("show.bs.modal");

  if (!Array.isArray(allEntries) || allEntries.length === 0) {
    return $("#journal").html(`
      <div class="col-12">
        <h3>No Entries Found</h3>
      </div>
    `);
  }

  let html = "";
  for (let i = 0; i < allEntries.length; i++) {
    const entry = allEntries[i];
    html += renderEntryTemplate(entry);
  }

  $("#journal").html(html);

  setupModalEvents(".code-modal");
}

function renderEntryTemplate(entry) {
  const prettyDate = moment(entry.date).fromNow();

  return `
    <div class="col-md-6 mb-4 mt-2">
      <h3>${entry.title}</h3>
      <em class="d-block text-right mr-3">
        <code>${prettyDate}</code>
      </em>
      <p>
        ${entry.post.join("</p><p>")}
      </p>
      
      ${!entry.codeSrc ? "" : renderCodeSrcModal(entry)}
    </div>
  `;
}

function renderCodeSrcModal(entry) {
  return `
    <p>
      <!-- Button trigger modal -->
      <button 
        type="button" 
        class="btn btn-primary" 
        data-toggle="modal" 
        data-target="#code-modal-${entry.id}">
         View example » 
      </button>
      
      <!-- Modal -->
      <div
          class="code-modal modal fade" id="code-modal-${entry.id}"
          tabindex="-1" 
          role="dialog" 
          aria-labelledby="code-modal-${entry.id}-title" 
          aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 
                 class="modal-title" 
                 id="code-modal-${entry.id}-title"
              >
                ${entry.title}
              </h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            
            <div class="modal-body">
              <div class='code-container' 
                   data-code-src="${entry.codeSrc}"
              >
              <!-- Embedded Iframe of Code will go here -->
              </div>
            </div>
            
            <div class="modal-footer">
              <button 
                type="button" 
                class="btn btn-secondary" 
                data-dismiss="modal"
                >
                  Close
                </button>
            </div>
          </div>
        </div>
      </div>
    </p>
  `;
}

function setupModalEvents(selector = ".code-modal") {
  $(selector).on("show.bs.modal", (evt) => {
    const $codeContainer = $(".code-container", evt.target);
    const codeSrcUrl = $codeContainer.data("codeSrc");

    $codeContainer.html(`
          <iframe height="400px" width="100%" src="${codeSrcUrl}" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
        `);
  });
}
