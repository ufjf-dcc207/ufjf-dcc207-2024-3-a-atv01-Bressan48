// arquivo src/Disciplina.tsx

import "./Disciplina.css";

function Disciplina ()
{
    const codigo = "DCC207";
    const nome = "Desencolvimentoo Web Front-End";

    return (
        <div className="disciplina">
            <div>{codigo}</div>
            <div>{nome}</div>
        </div>
    );
}

export default Disciplina;