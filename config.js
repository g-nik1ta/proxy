const isProduction = process.env.NODE_ENV === 'production';

const basename = isProduction ? '/proxy/' : '/';

export default basename;