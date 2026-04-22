import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt';
import passport from 'passport';
import { prisma } from './database.ts';
import bcrypt from 'bcryptjs';
import "dotenv/config";

const opts = {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.SECRETKEY!,

}


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


passport.use(new JWTStrategy(opts, async (jwtpayload, done) => {


        try {
                const user = await prisma.user.findFirst({
                        where: {
                                id: jwtpayload.id,
                        }
                });

                if (!user) {
                        return done(null, false);
                }

                return done(null, user);
        } catch (err) {
                return done(err);
        }


}))




export { passport };
