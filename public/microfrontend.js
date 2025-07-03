// Microfrontend Sidebar - Exposição para carregamento remoto
(function() {
  'use strict';
  
  if (typeof window !== 'undefined') {
    window.sidebarMicrofrontend = {
      mount: function(element) {
        console.log('Sidebar MF: Mount chamado', element);
        
        element.innerHTML = `
          <div style="width: 280px; height: 100vh; background-color: #f5f5f5; padding: 16px; box-sizing: border-box;">
            <h3 style="color: #1976d2; margin-top: 0;">Menu (Remoto)</h3>
            <ul style="list-style: none; padding: 0; margin: 0;">
              <li style="margin-bottom: 12px;">
                <a href="#" style="display: flex; align-items: center; color: #1976d2; text-decoration: none; padding: 8px; border-radius: 4px;">
                  📊 Dashboard
                </a>
              </li>
              <li style="margin-bottom: 12px;">
                <a href="#" style="display: flex; align-items: center; color: #1976d2; text-decoration: none; padding: 8px; border-radius: 4px;">
                  🏠 Home
                </a>
              </li>
              <li style="margin-bottom: 12px;">
                <a href="#" style="display: flex; align-items: center; color: #1976d2; text-decoration: none; padding: 8px; border-radius: 4px;">
                  📝 Artigos
                </a>
              </li>
              <hr style="margin: 16px 0; border: none; border-top: 1px solid #ddd;">
              <li style="margin-bottom: 12px;">
                <a href="#" style="display: flex; align-items: center; color: #1976d2; text-decoration: none; padding: 8px; border-radius: 4px;">
                  ℹ️ Sobre
                </a>
              </li>
              <li style="margin-bottom: 12px;">
                <a href="#" style="display: flex; align-items: center; color: #1976d2; text-decoration: none; padding: 8px; border-radius: 4px;">
                  📧 Contato
                </a>
              </li>
              <li style="margin-bottom: 12px;">
                <a href="#" style="display: flex; align-items: center; color: #1976d2; text-decoration: none; padding: 8px; border-radius: 4px;">
                  ⚙️ Configurações
                </a>
              </li>
            </ul>
          </div>
        `;
      },
      
      unmount: function(element) {
        console.log('Sidebar MF: Unmount chamado', element);
        if (element) {
          element.innerHTML = '';
        }
      }
    };
  }
})(); 