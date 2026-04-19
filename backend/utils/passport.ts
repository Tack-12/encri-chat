import { Strategy as LocalStrategy } from 'passport-local';
import passport from 'passport';
import { prisma } from './database';
import bcrypt from 'bcryptjs';


passport.use(new LocalStrategy(async (username, password, done) => {

        try {
                const user = await prisma.user.findFirst({
                        where: {
                                username
                        }
                });

                if (!user) {
                        return done(null, false);
                }

                const matched = await bcrypt.compare(password, user.password)

                if (!matched) {
                        return done(null, false);
                }

                return done(null, user);

        } catch (err) {
                return done(err);
        }
}));


passport.serializeUser((user, done) => {
        return done(null, user);
})

passport.deserializeUser((user, done) => {
        return done(null, user);
})




export { passport };
