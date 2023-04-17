const colors = {
  produto: {
    greenDark: '#015F43',
    green: '#00875F',
    greenLight: '#00B37E',
    redDark: '#AA2834',
    red: '#F75A68',
  },
  base: {
    background: '#121214',
    shapePrincipal: '#202024',
    shapeSecundaria: '#29292E',
    shapeTerciaria: '#323238',
    placeholder: '#7C7C8A',
    textoBase: '#C4C4CC',
    titulos: '#E1E1E6',
    white: '#FFFFFF',
  },
}

const typographies = {
  regular: {
    sm: {
      fontSize: 14,
      fontWeight: '400',
      fontFamily: 'Roboto_400Regular',
    },
    md: {
      fontSize: 16,
      fontWeight: '400',
      fontFamily: 'Roboto_400Regular',
    },
    xl: {
      fontSize: 20,
      fontWeight: '400',
      fontFamily: 'Roboto_400Regular',
    },
    '2xl': {
      fontSize: 24,
      fontWeight: '400',
      fontFamily: 'Roboto_400Regular',
    },
    '3xl': {
      fontSize: 32,
      fontWeight: '400',
      fontFamily: 'Roboto_400Regular',
    },
  },
  bold: {
    sm: {
      fontSize: 14,
      fontWeight: '600',
      fontFamily: 'Roboto_700Bold',
    },
    md: {
      fontSize: 16,
      fontWeight: '600',
      fontFamily: 'Roboto_700Bold',
    },
    xl: {
      fontSize: 20,
      fontWeight: '600',
      fontFamily: 'Roboto_700Bold',
    },
    '2xl': {
      fontSize: 24,
      fontWeight: '600',
      fontFamily: 'Roboto_700Bold',
    },
    '3xl': {
      fontSize: 32,
      fontWeight: '600',
      fontFamily: 'Roboto_700Bold',
    },
  },
}

const register = ({ matchUtilities, theme }) => {
  matchUtilities(
    {
      'text-style-regular': (value) => value,
    },
    { values: theme('regular') },
  )
  matchUtilities(
    {
      'text-style-bold': (value) => value,
    },
    { values: theme('bold') },
  )
}

module.exports = { colors, typographies, register }
