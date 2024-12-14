const ContainerInfo = () => {
  const [serverInfo, setServerInfo] = React.useState({
      containerName: 'Loading...',
      hostName: 'Loading...', 
      ipAddress: 'Loading...',
      time: new Date().toLocaleString(),
      nginx: {
          version: 'Loading...',
          status: 'Running'
      }
  });

  React.useEffect(() => {
      setServerInfo(prev => ({
          ...prev,
          containerName: window.containerInfo.containerName,
          hostName: window.containerInfo.hostname,
          ipAddress: window.containerInfo.ipAddress,
          nginx: {
              ...prev.nginx,
              version: window.containerInfo.nginxVersion
          }
      }));

      const timer = setInterval(() => {
          setServerInfo(prev => ({
              ...prev,
              time: new Date().toLocaleString()
          }));
      }, 1000);

      return () => clearInterval(timer);
  }, []);

  // Helper function to create info item
  const createInfoItem = (label, value) => 
      React.createElement('div', { 
          className: 'bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300' 
      }, [
          React.createElement('p', { 
              className: 'text-sm text-gray-500 mb-1' 
          }, label),
          React.createElement('p', { 
              className: 'font-semibold text-gray-900' 
          }, value)
      ]);

  return React.createElement('div', { 
      className: 'min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-8' 
  },
      React.createElement('div', { 
          className: 'max-w-4xl mx-auto' 
      }, [
          // Header Section
          // Header Section
          React.createElement('div', { 
              className: 'mb-16 text-center pt-8' 
          }, [
              React.createElement('h1', { 
                  className: 'space-y-4 mb-8' 
              }, [
                  React.createElement('div', {
                      className: 'flex items-center justify-center space-x-3'
                  }, [
                      React.createElement('span', {
                          className: 'text-4xl md:text-5xl'
                      }, '🐳'),
                      React.createElement('span', {
                          className: 'text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text'
                      }, 'Docker Compose Mastery')
                  ]),
                  React.createElement('div', {
                      className: 'text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text'
                  }, 'Multi-Container Orchestration')
              ]),
              React.createElement('div', { 
                  className: 'bg-blue-50 text-blue-700 py-3 px-6 rounded-full inline-block font-semibold shadow-sm text-xl' 
              }, 'Container Information Dashboard')
          ]),

          // Server Details Card
          React.createElement('div', { 
              className: 'bg-white rounded-xl shadow-lg p-6 mb-8' 
          }, [
              React.createElement('h2', { 
                  className: 'text-xl font-semibold mb-6 text-gray-800 border-b pb-3 text-center flex justify-center' 
              }, 'Server Details'),
              React.createElement('div', { 
                  className: 'grid grid-cols-1 md:grid-cols-2 gap-4' 
              }, [
                  createInfoItem('Container Name', serverInfo.containerName),
                  createInfoItem('Host Name', serverInfo.hostName),
                  createInfoItem('IP Address', serverInfo.ipAddress),
                  createInfoItem('Server Time', serverInfo.time),
                  createInfoItem('Nginx Version', serverInfo.nginx.version),
                  React.createElement('div', { 
                      className: 'bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4 shadow-md' 
                  }, [
                      React.createElement('p', { 
                          className: 'text-sm text-gray-500 mb-1' 
                      }, 'Status'),
                      React.createElement('div', { 
                          className: 'flex items-center' 
                      }, [
                          React.createElement('div', { 
                              className: 'w-2 h-2 rounded-full bg-green-500 mr-2' 
                          }),
                          React.createElement('p', { 
                              className: 'font-semibold text-gray-900' 
                          }, 'Active')
                      ])
                  ])
              ])
          ]),

          // Footer Links
          React.createElement('div', { 
              className: 'text-center text-gray-600' 
          }, [
              React.createElement('p', { 
                  className: 'mb-2' 
              }, [
                  'For documentation and support please refer to ',
                  React.createElement('a', { 
                      href: 'http://nginx.org', 
                      className: 'text-blue-500 hover:text-blue-600 transition-colors duration-200 font-medium' 
                  }, 'nginx.org')
              ]),
              React.createElement('p', null, [
                  'Commercial support is available at ',
                  React.createElement('a', { 
                      href: 'http://nginx.com', 
                      className: 'text-blue-500 hover:text-blue-600 transition-colors duration-200 font-medium' 
                  }, 'nginx.com')
              ])
          ])
      ])
  );
};

// Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(ContainerInfo));