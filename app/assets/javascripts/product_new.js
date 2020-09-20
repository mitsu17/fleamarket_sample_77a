$(document).on('turbolinks:load', function(){
  $(function(){
    function buildHTML(count) {
      let html = `<div class="preview-box" id="preview-box__${count}">
                      <div class="upper-box">
                        <img src="" alt="preview">
                      </div>
                      <div class="lower-box">
                        <div class="update-box">
                          <label class="edit_btn">編集</label>
                        </div>
                        <div class="delete-box" id="delete_btn_${count}">
                          <span>削除</span>
                        </div>
                      </div>
                    </div>`
      return html;
    }

    function setLabel() {
      var prevContent = $('.label-content').prev();
      labelWidth = (620 - $(prevContent).css('width').replace(/[^0-9]/g, ''));
      $('.label-content').css('width', labelWidth);
    }

    $(document).on('change', '.hidden-field', function() {
      setLabel();
      var id = $(this).attr('id').replace(/[^0-9]/g, '');
      $('.label-box').attr({id: `label-box--${id}`, for: `product_images_attributes_${id}_image`});
      var file = this.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function() {
        var image = this.result;
        if ($(`#preview-box__${id}`).length == 0) {
          var count = $('.preview-box').length;
          var html = buildHTML(id);
          var prevContent = $('.label-content').prev();
          $(prevContent).append(html);
        }
        $(`#preview-box__${id} img`).attr('src', `${image}`);
        var count = $('.preview-box').length;
        if (count == 5) {
          $('.label-content').hide();
        }

        setLabel();
        if(count < 5) {
          $('.label-box').attr({id: `label-box--${count}`, for: `product_images_attributes_${count}_image`});
        }
      }
    });

    $(document).on('click', '.delete-box', function() {
      var count = $('.preview-box').length;
      setLabel(count);
      var id = $(this).attr('id').replace(/[^0-9]/g, '');
      $(`#preview-box__${id}`).remove();
      console.log("new")
      $(`#product_images_attributes_${id}_image`).val("");

      var count = $('.preview-box').length;

      if (count == 4) {
        $('.label-content').show();
      }
      setLabel(count);

      if(id < 5) {
        $('.label-box').attr({id: `label-box--${id}`, for: `product_images_attributes_${id}_image`});
      }
    });
  });
})


$(document).on('turbolinks:load',function(){
  $('#product_price').on('input', function(){
    const data = $('#product_price').val();
    const profit = Math.round(data * 0.9).toLocaleString('ja-JP', {style: 'currency', currency: 'JPY'});
    const fee = Math.round(data * 0.1).toLocaleString('ja-JP', {style: 'currency', currency: 'JPY'});
    $('.right_bar').html(fee)
    $('.right_bar_2').html(profit)
    $('#price').val(profit)
    if(profit == '') {
      $('.right_bar_2').html('');
      $('.right_bar').html('');
    }
  })
})