var mangaName = 
[
    'Căn phòng của Sachi-Iro',
    'Câu lạc bộ những kẻ mất ngủ',
    'Cha là anh hùng, mẹ là tinh linh, còn tôi là người chuyển sinh',
    'Chú mèo kỳ diệu Kyuuchan',
    'Công chúa Chloe',
    'Cuộc gọi thâm tình',
    'Cuộc sống sát thủ của Kanako',
    'Cuồng ma tái thế',
    'Đại vương tha mạng',
    'Danh sách yêu quái - Cửu Hồ',
    'Đảo chết chóc',
    'Đảo hải tặc',
    'Doraemon',
    'Giáo chủ tân nhĩ em muốn hoàn lương',
    'Hoa sơn tặc',
    'Hồi sinh thế giới',
    'Kẻ thách đấu',
    'Kết cục của nhân vật phản diện chỉ có thể là cái chết',
    'Koitsu Ore No Koto Suki Nanoka',
    'Komi-san không thể giao tiếp',
    'Lửa thiêu nhà Mitarai',
    'Ma vương trở lại',
    'Mami mau chạy đi daddy đuổi tới rồi',
    'Naruto',
    'Ngã lão ma thần',
    'Nhật ký thường ngày của tiên vương',
    'Nhiệm vụ của kẻ mạnh nhất',
    'Nữ vương đích thủ thuật đao',
    'Owari No Seraph',
    'Phá bỏ giới hạn',
    'Quái thú với hoa',
    'Sắc đỏ lồng đèn và yêu ma',
    'Ta có chín nữ đồ đệ',
    'Ta là tà đế',
    'Thanh gươm diệt quỷ',
    'Thiếu nữ 1M8',
    'Thuần chân sửu văn',
    'Tiên đế võ tôn',
    'Toàn chức pháp sư',
    'Tôi muốn ly hôn',
    'Từ làn sương mù đỏ thẫm',
    'Tửu quán yêu quái',
    'Vợ tôi là quỷ vương',
    'Vua bóng chuyền'
];

var searchInput = document.getElementById("search");
var searchWrapper = document.querySelector(".wrapper");
var resultsWrapper = document.querySelector(".results");

searchInput.onfocus = function(){
    this.setAttribute('placeholder', '');
}

searchInput.addEventListener("keyup", () => {
    var results = [];
    var input = searchInput.value;
    if(input.length)
    {
        results = mangaName.filter((item) => {
            return item.toLowerCase().includes(input.toLowerCase());
        })
    }
    renderResults(results);
})

function renderResults(results) 
{
    if(!results.length){
        return searchWrapper.classList.remove('show');
    }
    var content = results.map((item) => {
        return `<li><a href = './ALL/truyện/${item}.html'>${item}</a></li>`;
    })
    .join('');
    searchWrapper.classList.add('show');
    resultsWrapper.innerHTML = `<ul>${content}</ul>`;
}