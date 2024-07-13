import app from "./src/server";

import { PORT } from "./src/config/envs";

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
