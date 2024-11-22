const showMenu = (ToggleId, navbarId, bodyId)=>{
    const toggle = document.getElementById(ToggleId),
    navbar = document.getElementById(navbarId),
    bodypadding = document.getElementById(bodyId)

    if(toggle && navbar){
        toggle.addEventListener('click', ()=>{
            navbar.classList.toggle('expander')

            bodypadding.classList.toggle('body-pd')
        })
    }
}
showMenu('nav-toggle','navbar','body-pd')

const linkColor = document.querySelectorAll('.nav__link')
function colorLink(){
    linkColor.forEach(l=> l.classList.remove('active'))
    this.classList.add('active')
}
linkColor.forEach(l=> l.addEventListener('click', colorLink))

const linkCollapse = document.getElementsByClassName('collapse__link')
var i 

for(i=0;i<linkCollapse.length;i++){
    linkCollapse[i].addEventListener('click', function(){
    const collapseMenu = this.nextElementSibling
    collapseMenu.classList.toggle('showCollapse')

    const rotate = collapseMenu.previousElementSibling
    rotate.classList.toggle('rotate')
    })
}


// Função que atualiza a foto de perfil
function updateProfileImage(event) {
    const file = event.target.files[0];  // Pega o arquivo selecionado
    const reader = new FileReader();     // Cria um FileReader para ler a imagem

    reader.onload = function(e) {
        // Após a imagem ser carregada, alteramos o src da imagem do perfil
        const profileImage = document.getElementById('profileImage');
        profileImage.src = e.target.result;
    };

    if (file) {
        reader.readAsDataURL(file);  // Lê o arquivo como URL base64
    } else {
        alert('Por favor, selecione uma imagem válida.');
    }
}





function saveSettings() {
    const userName = document.getElementById('userName').value;
    const userDescription = document.getElementById('userDescription').value;
    const categories = document.getElementById('categories').value;
    const animalTypes = document.getElementById('animalTypes').value;
    const stockControl = document.getElementById('stockControl').value;
    const paymentMethods = document.getElementById('paymentMethods').value;
    const installments = document.getElementById('installments').value;
    const deliveryOptions = document.getElementById('deliveryOptions').value;
    const freeShipping = document.getElementById('freeShipping').value;

    alert(`Configurações salvas com sucesso:\n
        Nome do Usuário: ${userName}\n
        Descrição: ${userDescription}\n
        Categorias: ${categories}\n
        Tipos de Animais: ${animalTypes}\n
        Controle de Estoque: ${stockControl}\n
        Métodos de Pagamento: ${paymentMethods}\n
        Parcelas: ${installments}\n
        Opções de Entrega: ${deliveryOptions}\n
        Frete Grátis Acima de: ${freeShipping}`);
}


function saveSettings() {
    // Função para salvar as configurações (simples para demonstração)
    alert('Configurações salvas com sucesso!');
}



// Lista de cidades para cada estado
const citiesByState = {
    AC: ["Rio Branco", "Cruzeiro do Sul", "Sena Madureira", "Tarauacá", "Feijó", "Plácido de Castro", "Xapuri", "Brasiléia", "Epitaciolândia", "Mâncio Lima"],
    AL: ["Maceió", "Arapiraca", "Palmeira dos Índios", "Delmiro Gouveia", "Rio Largo", "Penedo", "Coruripe", "São Miguel dos Campos", "União dos Palmares", "Atalaia"],
    AP: ["Macapá", "Santana", "Laranjal do Jari", "Oiapoque", "Mazagão", "Pedra Branca do Amapari", "Porto Grande", "Tartarugalzinho", "Calçoene", "Ferreira Gomes"],
    AM: ["Manaus", "Parintins", "Itacoatiara", "Tabatinga", "Tefé", "Manacapuru", "Coari", "Humaitá", "São Gabriel da Cachoeira", "Apuí"],
    BA: ["Salvador", "Feira de Santana", "Vitória da Conquista", "Camaçari", "Itabuna", "Juazeiro", "Ilhéus", "Teixeira de Freitas", "Alagoinhas", "Lauro de Freitas"],
    CE: ["Fortaleza", "Juazeiro do Norte", "Caucaia", "Sobral", "Crato", "Maracanaú", "Itapipoca", "Aquiraz", "Canindé", "Russas"],
    DF: ["Brasília", "Taguatinga", "Ceilândia", "Gama", "Brazlândia", "Planaltina", "Samambaia", "Águas Claras", "Recanto das Emas", "Guará"],
    ES: ["Vitória", "Vila Velha", "Serra", "Cariacica", "Linhares", "Colatina", "São Mateus", "Fundão", "Guarapari", "Anchieta"],
    GO: ["Goiânia", "Aparecida de Goiânia", "Anápolis", "Rio Verde", "Luziânia", "Catalão", "Jataí", "Formosa", "Águas Lindas de Goiás", "Novo Gama"],
    MA: ["São Luís", "Imperatriz", "Caxias", "Timon", "Codó", "Bacabal", "Açailândia", "Santa Inês", "Pinheiro", "Chapadinha"],
    MT: ["Cuiabá", "Várzea Grande", "Rondonópolis", "Sinop", "Mato Grosso", "Tangará da Serra", "Cáceres", "Barra do Garças", "Lucas do Rio Verde", "Sorriso"],
    MS: ["Campo Grande", "Dourados", "Três Lagoas", "Corumbá", "Ponta Porã", "Naviraí", "Nova Andradina", "Paranaíba", "Chapadão do Sul", "Aquidauana"],
    MG: ["Belo Horizonte", "Uberlândia", "Contagem", "Juiz de Fora", "Betim", "Montes Claros", "Uberaba", "Divinópolis", "Poços de Caldas", "Governador Valadares"],
    PA: ["Belém", "Ananindeua", "Marabá", "Santana", "Parauapebas", "Castanhal", "Bragança", "Altamira", "Breves", "Capanema"],
    PB: ["João Pessoa", "Campina Grande", "Santa Rita", "Patos", "Bayeux", "Cajazeiras", "Sousa", "Catolé do Rocha", "Itaporanga", "Pombal"],
    PR: ["Curitiba", "Londrina", "Maringá", "Ponta Grossa", "Cascavel", "Foz do Iguaçu", "São José dos Pinhais", "Paranaguá", "Guarapuava", "Campo Largo"],
    PE: ["Recife", "Olinda", "Jaboatão dos Guararapes", "Caruaru", "Petrolina", "Cabo de Santo Agostinho", "Ipojuca", "Garanhuns", "Vitória de Santo Antão", "Paulista"],
    PI: ["Teresina", "Parnaíba", "Picos", "Floriano", "Campo Maior", "Canto do Buriti", "Barreiras", "São Raimundo Nonato", "Barras", "Altos"],
    RJ: ["Rio de Janeiro", "Niterói", "Duque de Caxias", "Nova Iguaçu", "São Gonçalo", "Belford Roxo", "Campos dos Goytacazes", "Angra dos Reis", "Volta Redonda", "Teresópolis"],
    RN: ["Natal", "Mossoró", "Parnamirim", "São Gonçalo do Amarante", "Caicó", "Ceará-Mirim", "Macau", "Açu", "Parnamirim", "Currais Novos"],
    RS: ["Porto Alegre", "Caxias do Sul", "Pelotas", "Santa Maria", "Passo Fundo", "Rio Grande", "Novo Hamburgo", "São Leopoldo", "Gravataí", "Bagé"],
    RO: ["Porto Velho", "Ji-Paraná", "Ariquemes", "Cacoal", "Vilhena", "Rolim de Moura", "Machadinho d'Oeste", "Guajará-Mirim", "Pimenta Bueno", "Colorado do Oeste"],
    RR: ["Boa Vista", "Rorainópolis", "Caracaraí", "Mucajaí", "Iracema", "Pacaraima", "Cantá", "São João da Baliza", "Normandia", "Uiramutã"],
    SC: ["Florianópolis", "Joinville", "Blumenau", "Chapecó", "São José", "Criciúma", "Itajaí", "Lages", "Palhoça", "Brusque"],
    SP: ["São Paulo", "Campinas", "São Bernardo do Campo", "Santo André", "Osasco", "Ribeirão Preto", "Sorocaba", "Bauru", "São José dos Campos", "Piracicaba"],
    SE: ["Aracaju", "Nossa Senhora do Socorro", "Lagarto", "Itabaiana", "Estância", "Tobias Barreto", "Simão Dias", "Propriá", "Barra dos Coqueiros", "Itaporanga"],
    TO: ["Palmas", "Araguaína", "Gurupi", "Porto Nacional", "Paraíso do Tocantins", "Colinas do Tocantins", "Tocantinópolis", "Miracema do Tocantins", "Augustinópolis", "Monte do Carmo"]
};

// Função para atualizar a lista de cidades com base no estado selecionado
function updateCities() {
    const stateSelect = document.getElementById("state");
    const citySelect = document.getElementById("city");
    const selectedState = stateSelect.value;

    // Limpa as opções anteriores de cidade
    citySelect.innerHTML = "<option value=''>Selecione a cidade</option>";

    // Adiciona as cidades correspondentes ao estado selecionado
    if (selectedState && citiesByState[selectedState]) {
        citiesByState[selectedState].forEach(city => {
            const option = document.createElement("option");
            option.value = city;
            option.textContent = city;
            citySelect.appendChild(option);
        });
    }
}