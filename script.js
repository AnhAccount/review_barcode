document.addEventListener('DOMContentLoaded', () => {
    const reviewedBtn = document.getElementById('reviewedBtn');
    const wheelContainer = document.getElementById('wheel-container');
    const spinBtn = document.getElementById('spinBtn');
    const resultDiv = document.getElementById('result');
    const prizeSpan = document.getElementById('prize');
    const canvas = document.getElementById('wheel');
    const ctx = canvas.getContext('2d');

    const prizes = ['Free Salad', 'Voucher 300k', 'Free Drink', 'Free Fruit', 'Surprise Gift', 'Voucher 100k'];
    const colors = ['#e67e22', '#3498db', '#2ecc71', '#f1c40f', '#9b59b6', '#e74c3c'];
    let chart;

    Chart.register(ChartDataLabels);

    function initWheel() {
        chart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: prizes,
                datasets: [{
                    data: prizes.map(() => 1),
                    backgroundColor: colors,
                }]
            },
            options: {
                responsive: true,
                animation: {
                    duration: 0
                },
                plugins: {
                    tooltip: {
                        enabled: false
                    },
                    legend: {
                        display: false
                    },
                    datalabels: {
                        color: '#ffffff',
                        formatter: (_, context) => context.chart.data.labels[context.dataIndex],
                        font: {
                            size: 12,
                            weight: 'bold'
                        }
                    }
                }
            }
        });
    }

    reviewedBtn.addEventListener('click', () => {
        reviewedBtn.classList.add('hidden');
        wheelContainer.classList.remove('hidden');
        initWheel();
        sendEmail();
    });

    spinBtn.addEventListener('click', () => {
        spinBtn.disabled = true;
        const spinDuration = 3000;
        const randomSpin = Math.random() * 360 * 5 + 720; // Spin at least 2 times

        canvas.style.transition = `transform ${spinDuration / 1000}s ease-out`;
        canvas.style.transform = `rotate(${randomSpin}deg)`;

        setTimeout(() => {
            const finalRotation = randomSpin % 360;
            const prizeIndex = Math.floor((360 - finalRotation + 90) % 360 / (360 / prizes.length));
            const prize = prizes[prizeIndex];

            setTimeout(() => {
                prizeSpan.textContent = prize;
                wheelContainer.classList.add('hidden');
                resultDiv.classList.remove('hidden');
            }, 3000); // 3-second delay
            
        }, spinDuration);
    });
    
    function sendEmail() {
        // IMPORTANT: Replace with your EmailJS credentials
        const serviceID = 'YOUR_SERVICE_ID';
        const templateID = 'YOUR_TEMPLATE_ID';
        const publicKey = 'YOUR_PUBLIC_KEY';

        emailjs.init({
            publicKey: publicKey,
          });

        const templateParams = {
            to_email: 'tqanh20@yahoo.com',
            message: 'testing barcode - success'
        };

        emailjs.send(serviceID, templateID, templateParams)
            .then(() => {
                console.log('SUCCESS!');
            }, (err) => {
                console.log('FAILED...', err);
            });
    }
});
