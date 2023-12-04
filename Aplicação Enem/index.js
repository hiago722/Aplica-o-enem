<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>ENEM Simulado</title>
    <style>
        body {
            background-image: url('sua-imagem-de-fundo.jpg'); /* Substitua 'sua-imagem-de-fundo.jpg' pelo caminho da sua imagem de fundo */
            background-size: cover;
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            color: white;
        }

        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: rgba(0, 0, 0, 0.3); /* Fundo semi-transparente para tornar o texto mais legível */
            border-radius: 10px;
        }

        h1 {
            font-size: 24px;
            color: #fff;
        }

        p {
            font-size: 16px;
            color: #fff;
        }

        ol {
            list-style-type: decimal;
            padding-left: 20px;
        }

        li {
            margin: 20px 0;
        }

        input[type="radio"] {
            margin-right: 5px;
        }

        input[type="button"] {
            background-color: #0074d9;
            color: white;
            padding: 10px 20px;
            border: none;
            cursor: pointer;
        }

        #resultado {
            font-weight: bold;
        }

        .resposta-correta {
            font-weight: bold;
            color: #00ff00; /* Cor verde para respostas corretas */
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>ENEM Simulado</h1>
        <p>Perguntas:</p>

        <ol>
            <li>
                <p>Qual é o maior bioma brasileiro em extensão territorial?</p>
                <input type="radio" name="q1" value="a">a) Cerrado<br>
                <input type="radio" name="q1" value="b">b) Mata Atlântica<br>
                <input type="radio" name="q1" value="c">c) Amazônia<br>
                <input type="radio" name="q1" value="d">d) Caatinga<br>
                <p class="resposta-correta">Resposta correta: c) Amazônia</p>
            </li>

            <!-- Adicione mais perguntas da mesma forma -->

            <li>
                <p>Qual é a capital da Argentina?</p>
                <input type="radio" name="q30" value="a">a) Buenos Aires<br>
                <input type="radio" name="q30" value="b">b) Montevidéu<br>
                <input type="radio" name="q30" value="c">c) Assunção<br>
                <input type="radio" name="q30" value="d">d) Santiago<br>
                <p class="resposta-correta">Resposta correta: a) Buenos Aires</p>
            </li>
        </ol>

        <input type="button" value="Corrigir" onclick="corrigirSimulado()">

        <p>Resultado: <span id="resultado">Você acertou 0 de 30 perguntas. Pontuação: 0/30</span></p>

        <script>
            function corrigirSimulado() {
                const respostas = {
                    q1: "c",
                    // Adicione as respostas corretas para as perguntas restantes da mesma forma
                };

                let pontuacao = 0;
                for (let pergunta in respostas) {
                    const respostaSelecionada = document.querySelector(`input[name=${pergunta}]:checked`);
                    if (respostaSelecionada) {
                        if (respostaSelecionada.value === respostas[pergunta]) {
                            pontuacao++;
                        }
                    }
                }

                document.getElementById("resultado").innerHTML = `Você acertou ${pontuacao} de 30 perguntas. Pontuação: ${pontuacao}/30`;
            }
        </script>
    </div>
</body>
</html>
