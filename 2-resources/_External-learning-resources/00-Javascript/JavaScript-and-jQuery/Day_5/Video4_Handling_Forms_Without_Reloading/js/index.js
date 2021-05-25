// $('#make-animal-talk').click(makeAnimalTalk);

$("button#make-animal-talk").click(makeAnimalTalk);

function makeAnimalTalk(evt) {
  const inputValue = $("input[name=speech]").val();
  const fontSize = $("select[name=fontSize]").find(":selected").val();

  $("img").before(`
    <div class='bubble' style='font-size: ${fontSize}px'>
      ${inputValue}
    </div>
  `);
}
