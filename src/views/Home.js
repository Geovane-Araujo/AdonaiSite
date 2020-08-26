import axios from 'axios'

export default {
  name: 'Home',
  data () {
    return {
      form: {
        nome: '',
        email: '',
        telefone: ''
      }
    }
  },
  methods: {
    redirect () {
      window.open('http://app.adonaisoft.com.br')
    },
    send (form) {
      axios.post('http://localhost:8089/adonai/newUser', form).then(res => {
        form.email = ''
        form.nome = ''
        form.telefone = ''
      }).catch(err => alert(err))
    }
  }
}
