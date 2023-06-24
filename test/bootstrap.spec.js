import { connect, drop } from '@lykmapipo/mongoose-test-helpers';

before((done) => connect(process.env.MONGO_URI, done));

after((done) => drop(done));
