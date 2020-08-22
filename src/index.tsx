import FishPond from './base/server'

const run = () => {
    const app = new FishPond();

    app.listen(8000);
}

export default run;