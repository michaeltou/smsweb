var config = {
        type: 'pie',
        data: {
            datasets: [{
                data: [10,20,70],
                backgroundColor: [
                    window.chartColors.red,
                    window.chartColors.orange,
                    window.chartColors.yellow,
                ],
                label: 'Dataset 1'
            }],
            labels: [
                "运营商",
                "接收端故障",
                "黑名单"
            ]
        },
        options: {
            responsive: true
        }
    };

    window.onload = function() {
        var ctx = document.getElementById("chart-area").getContext("2d");
        window.myPie = new Chart(ctx, config);
    };