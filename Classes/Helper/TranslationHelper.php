<?php


namespace Prgfx\Neos\AxeCore\Helper;


use Neos\Eel\ProtectedContextAwareInterface;
use Neos\Flow\Annotations as Flow;
use Neos\Flow\I18n\Locale;
use Neos\Neos\Service\UserService;

class TranslationHelper implements ProtectedContextAwareInterface
{

    /**
     * @Flow\Inject
     * @var UserService
     */
    protected $userService;

    /**
     * @Flow\InjectConfiguration(package="Neos.Neos", path="userInterface.defaultLanguage")
     * @var string
     */
    protected $interfaceDefaultLanguage;

    /**
     * @Flow\InjectConfiguration("translations")
     * @var string
     */
    protected $translationFilePattern;

    public function loadTranslation()
    {
        $user = $this->userService->getBackendUser();
        if (!$user) {
            return null;
        }
        $preferences = $user->getPreferences();
        $language = $preferences->getInterfaceLanguage() ?: $this->interfaceDefaultLanguage;
        $pattern1 = str_replace('{language}', $language, $this->translationFilePattern);
        if (file_exists($pattern1)) {
            return json_decode(file_get_contents($pattern1), true);
        }
        $locale = new Locale($language);
        $language = $locale->getLanguage();
        $pattern2 = str_replace('{language}', $language, $this->translationFilePattern);
        if (file_exists($pattern2)) {
            return json_decode(file_get_contents($pattern2), true);
        }
        return null;
    }

    public function allowsCallOfMethod($methodName)
    {
        return true;
    }
}
