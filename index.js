import app from "./app.js";
import {PORT} from "./src/utility/Config.js";
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});