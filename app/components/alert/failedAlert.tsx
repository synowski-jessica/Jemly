import Swal from "sweetalert2";

export function FailedAlert() {
   return Swal.fire({
      icon: undefined,
      html: `
        <p class="swal-tag">— Envoi interrompu</p>
        <div>
          <h2 class="swal-title">Oups,</h2>
          <h2 class="swal-title">une erreur est survenue</h2>
        </div>
        <div class="swal-divider"></div>
        <p class="swal-body">
         Veuillez réessayer ultérieurement ou me contacter directement à <a href="mailto:contact@jemly.fr" style="color: var(--color-text-secondary);">contact@jemly.fr</a>
        </p>
      `,
      showCloseButton: true,
      confirmButtonText: "Fermer",
      buttonsStyling: false,
  
      customClass: {
        popup: "swal-container",
        confirmButton:
          "swal-button"
      }
    });
}