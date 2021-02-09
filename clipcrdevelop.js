/* Linea de bases unificadas */
var tisgPRO = function(a=1) {
    var time=a;
    console.log(`Que pasa? ${time} y tambien ${a}`)


    return {
      sistemlk: function(codebreak) {
        if (codebreak == '29154') {
            return "El codigo fuente ha sido desbloqueado."
        } else {
            return "El codigo es incorrecto, verifica los datos."
        }
      },
  
      setUser: function(permission) {
        if (permission == 'developer') {
            localStorage.setItem('user', 'develop_')
            location.reload()
        } else if (permission == 'normal') {
            localStorage.setItem('user', 'standard')
            location.reload()
        } else {
            return "No se reconoce el tipo de usuario_"
        }
      },
  
      getUser: function() {
        return localStorage.getItem('user');
      },
  
      Zero: function() {
        return "Zero"
      }
    }
  }