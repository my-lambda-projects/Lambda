$("#myslider").carousel({ interval: 2000 });

const $select = $("select[name='slide-number']").on("change", (evt) => {
  selectSlideNumber($(":selected", evt.target).val());
});

function selectSlideNumber(number) {
  $("#myslider").carousel(+number);
}

$("#myslider").on("slid.bs.carousel", (evt) => {
  const slideNum = evt.to;
  $select
    .find("option")
    .attr("disabled", false)
    .filter(`[value="${slideNum}"]`)
    .attr("disabled", true);
});

$("#see-code-btn").click((evt) => {
  const $jsCode = $("#js-code");
  $jsCode
    .css("min-height", "500px")
    .html(
      `
      <iframe height="600" width="100%" src="https://repl.it/@mrosata/Day-7-Assignment-Review-from-Day-6?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
    `
    )
    .find("iframe")
    .css({ minMeight: "100%" });
});

$(window).resize(resizeImages);
$(window).resize();

function resizeImages() {
  const $imgs = $(".img");
  $imgs.each((idx, img) => {
    const imgWidth = $(img).parent().width();
    const imgHeight = (500 / 900) * imgWidth;
    $(img).css({
      width: `${imgWidth}px`,
      height: `${imgHeight}px`,
    });
  });
}
