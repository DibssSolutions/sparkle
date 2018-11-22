import { OPEN, ACTIVE, BODY } from '../constants';

(() => {
  const controls = $('[data-modal-control]');
  const modals = $('[data-modal]');
  controls.each((i, control) => {
    control = $(control);
    const modal = modals.filter(
      `[data-modal="${control.data('modal-control')}"]`
    );

    control.on('click', e => {
      e.preventDefault();
      modal.toggleClass(OPEN);
      controls.removeClass(ACTIVE);
      control.addClass(ACTIVE);
    });
  });

  modals.each((i, modal) => {
    modal = $(modal);
    const inner = modal.find('[data-modal-container]');
    const close = modal.find('[data-modal-close]');

    const hide = () => modal.removeClass(OPEN);

    BODY.on('click', e => {
      if (
        $(e.target).closest(inner).length ||
        $(e.target).closest(close).length ||
        $(e.target).closest(controls).length
      )
        return;
      hide();
    });

    BODY.on('keydown', e => {
      if (e.which !== 27) return;
      hide();
    });

    close.on('click', e => {
      e.preventDefault();
      hide();
    });
  });
})();
