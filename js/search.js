// Lista de servicios (puedes cambiarla por la lista real de tu sitio)
const services = [
    { name: "Servicio de Instalaciones Eléctricas", link: "servicios/instalaciones_eléctricas.html" },
    { name: "Servicio de Mantenimiento Eléctrico", link: "servicios/mantenimiento_instalaciones_eléctricas.html" },
    { name: "Servicio de Instalaciones de Tableros Eléctricos", link: "servicios/instalaciones_tableros_eléctricos.html" },
    { name: "Servicio de Instalaciones de Termas", link: "servicios/instalaciones_termas.html" },
    { name: "Otros servicios", link: "./servicios.html" }
];

// Función para filtrar los servicios
function filterServices(context) {
    const input = document.getElementById(`search-input-${context}`).value.toLowerCase();
    const serviceList = document.getElementById(`service-list-${context}`);

    const filteredServices = services.filter(service => service.name.toLowerCase().includes(input));

    serviceList.innerHTML = "";

    if (filteredServices.length > 0 && input) {
        serviceList.style.display = "block"; 
        filteredServices.forEach(service => {
            const li = document.createElement("li");
            li.textContent = service.name;
            li.onclick = () => window.location.href = service.link; 
            serviceList.appendChild(li);
        });
    } else {
        serviceList.style.display = "none"; 
    }
}
