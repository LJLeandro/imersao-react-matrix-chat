import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import React from 'react';
import appConfig from '../config.json';
import { useRouter } from 'next/router';


function Titulo(props){
    const Tag = props.tag || 'h1';
    
    return (
        <div>
            <Tag>{props.children}</Tag>
            <style jsx>{`
                ${Tag} {    
                    color: ${appConfig.theme.colors.neutrals['100']};
                    font-size: 24px
                    font-weight: 600px
                }
            `}</style>
        </div>
    );
}

export default function PaginaInicial() {
    const [username, setUsername] = React.useState('LJLeandro');
    const [userPhotoUrl, setUserPhotoUrl] = React.useState(`https://github.com/${username}.png`);

  
    const roteamento = useRouter();
    
    return (
      <>
        <Box
          styleSheet={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backgroundColor: appConfig.theme.colors.primary['100'],
            backgroundImage: 'url(https://images3.alphacoders.com/105/1059632.jpg)',
            backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
          }}
        >
          <Box
            styleSheet={{
                opacity: 0.85,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: {
                xs: 'column',
                sm: 'row',
              },
              width: '100%', maxWidth: '700px',
              borderRadius: '5px', padding: '32px', margin: '16px',
              boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
              backgroundColor: appConfig.theme.colors.neutrals[600],
            }}
          >
            {/* Formulário */}
            <Box
              as="form"
              onSubmit={function (infosDoEvento) {
                infosDoEvento.preventDefault();
                console.log('Alguém submeteu o form...');
                // window.location.href='/chat';

                roteamento.push(`/chat?username=${username}`);
              }}
              styleSheet={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
              }}
            >

              <Titulo tag="h1">Boas vindas de volta!</Titulo>
              <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[300] }}>
                {appConfig.name}
              </Text>

              <TextField
                fullWidth
                textFieldColors={{
                  neutral: {
                    textColor: appConfig.theme.colors.neutrals[200],
                    mainColor: appConfig.theme.colors.neutrals[900],
                    mainColorHighlight: appConfig.theme.colors.primary[500],
                    backgroundColor: appConfig.theme.colors.neutrals[800],
                  },
                }}
                value={username} 
                onChange={(evento) => {
                  const valor = evento.target.value;
                  setUsername(valor);

                  if (valor.length > 2) {
                    setUserPhotoUrl(`https://github.com/${valor}.png`);
                  }
                  
                 
                  console.log('Usuário digitou...', evento.target.value);
                }
              }
              />
              <Button
                type='submit'
                label='Entrar'
                fullWidth
                buttonColors={{
                  background: "#142d69"
                  // contrastColor: appConfig.theme.colors.neutrals["050"],
                  // mainColor: appConfig.theme.colors.primary[900],
                  // mainColorLight: appConfig.theme.colors.primary[400],
                  // mainColorStrong: appConfig.theme.colors.primary[300]
                }}
              />
            </Box>
            {/* Formulário */}
  
  
            {/* Photo Area */}
            <Box
              styleSheet={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                maxWidth: '200px',
                padding: '16px',
                backgroundColor: appConfig.theme.colors.neutrals[800],
                border: '1px solid',
                borderColor: appConfig.theme.colors.neutrals[999],
                borderRadius: '10px',
                flex: 1,
                minHeight: '240px',
              }}
            >
              <Image
                styleSheet={{
                  borderRadius: '50%',
                  marginBottom: '16px',
                }}
                src={userPhotoUrl}
              />
              <Text
                variant="body4"
                styleSheet={{
                  color: appConfig.theme.colors.neutrals[200],
                  backgroundColor: appConfig.theme.colors.neutrals[900],
                  padding: '3px 10px',
                  borderRadius: '1000px'
                }}
              >
                {username}
              </Text>
            </Box>
            {/* Photo Area */}
          </Box>
        </Box>
      </>
    );
  }

// export default HomePage