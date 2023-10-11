function mainHide(){
    $('.main-contents').animate({'top': '-300px', 'opacity': '0'})
    $('.btn'),delay(200).animate({'bottom': '-140px', 'opacity': '0'})
    // $('').animate({'right':'-150px'}, 1500)
}

function mainShow(){
    $('.').animate({'top': '-300px', 'opacity': '0'})
    $('.btn'),delay(200).animate({'bottom': '0', 'opacity': '1'})
    // $('').animate({'right':'0'})
}

function stage1Show(){
    $('stage1').delay(1000).fadeIn(500, function(){
        $('.top').animate({'width': '100%'}), 500, function(){
            $('.right').animate({'height': '100%'}), 500, function(){
                $('.bottom').animate({'width': '100%'}), 500, function(){
                    $('.left').animate({'height': '100%'}), 500, function(){

                    }
                }
            }
        }
    })
}

function stage1Hide(){
    $('stage1').fadeout(500)
    $('.top').animate({'width': '0'}, 500)
    $('.right').animate({'height': '0'}, 500)
    $('.bottom').animate({'width': '0'}, 500)
    $('.left').animate({'height': '0'}, 500)

   
}

// $('a.btn1').click(function(){
//     mainHide()
//     stage1Show()
// })
// $('a.btn2').click(function(){})

// $('.stage1 a.close').click(function(e){
//     e.preventDefault()

//     stage1Hide()
//     mainShow()
// })


$('.btn1').click(function(){
    // mainHide()
    $('.stage1').fadeIn(2000);
})


