import { callSingleEndpoint } from "./callSingleEndpoint.js";

//Call Endpoint
$(document).ready(function () {
    $("#submitBtn").click(handleSubmitSingle);
  });

function handleSubmitSingle(event) {
  const PlayerAnswer = $("#playerAnswer").val();

  callSingleEndpoint(PlayerAnswer);

  
}
