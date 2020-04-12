$(function(){

  function buildHTML(message) {

    if (message.image) {
      var html =
        `<div class="chat-post">
          <div class="chat-post__contents">
            <div class="member-name">
              ${message.user_name}
            </div>
            <div class="day-time">
              ${message.created_at}
            </div>
          </div>
          <div class=""chat-message>
            <P class="chat-message__text">
              ${message.text}
            </p>
          </div>
          <img src=${message.image} >
        </div>`
      return html;
    } else {
      var html =
        `<div class="chat-post">
          <div class="chat-post__contents">
            <div class="member-name">
              ${message.user_name}
            </div>
            <div class="day-time">
              ${message.created_at}
            </div>
          </div>
          <div class=""chat-message>
            <P class="chat-message__text">
              ${message.text}
            </p>
          </div>
        </div>`
      return html;
    }; 
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault()
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.message').append(html);
      $('.message').animate({ scrollTop: $('.message')[0].scrollHeight});
      $('form')[0].reset();
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    })
    .always(function() {
      $('.send-btn').prop('disabled', false);
    })
  })
});