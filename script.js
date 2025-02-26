document.getElementById('fileInput').addEventListener('change', function(event) {
            const file = event.target.files[0];
            const preview = document.getElementById('preview');
            
            if (file) {
                const fileURL = URL.createObjectURL(file);
                let element;
                if (file.type.startsWith('image/')) {
                    element = document.createElement('img');
                    element.src = fileURL;
                } else if (file.type.startsWith('video/')) {
                    element = document.createElement('video');
                    element.src = fileURL;
                    element.controls = true;
                }
                
                const container = document.createElement('div');
                container.classList.add('file-container');
                
                const removeBtn = document.createElement('button');
                removeBtn.innerText = 'Eliminar';
                removeBtn.classList.add('remove-btn');
                removeBtn.addEventListener('click', function() {
                    preview.removeChild(container);
                });
                
                container.appendChild(element);
                container.appendChild(removeBtn);
                preview.appendChild(container);
            }
        });