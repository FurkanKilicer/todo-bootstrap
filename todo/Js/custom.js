$(document).ready(() => {

    var tasks = 0;
    $("#removeAll").hide();

    $("#add").on("click", (event) => { // Click eventine ekleme yap.
        event.preventDefault(); // olayın varsayılan eylemini önle
        event.stopPropagation(); // Diğer elementlerin oluşumunu durdur
        var val = $("input").val(); // değeri girdiden al
        if (val !== "") { // inputun boş olup olmadığını kontrol et
            tasks += 1; // Her sayıda 1 ekle
            var elem = $("<li class='list-group-item'>").text(
                val); //öğeyi yeni bir görev için görüntülemek üzere hazırla
            $(elem).append(
                "<div class='text-right'><button class='btn btn-danger mb-4'> X </button></div></li>"
            );
            $("#mylist").append(elem); // yeni görev öğesini mylist öğesine ekle 
            $("input").val(""); // İnput'u temizle

            /* görev işleyiciyi kaldır */
            $(".text-right").on("click", function (event) {
                event.preventDefault();
                event.stopPropagation()
                tasks -= 1;
                $(this).parent().remove();
            });
            /* 3'ten fazla görevimiz olduğunda removeAll düğmesini göster */
            if (tasks > 2) {
                $("#removeAll").show();
            }
            /* removeAll */
            $("#removeAll").on("click", (event) => {
                event.preventDefault();
                event.stopPropagation();
                $(".disabled").siblings().remove();
                tasks = 0;
                $("#removeAll").hide();
            });
        }
    });
});