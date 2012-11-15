using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Windows.Foundation;
using Windows.Foundation.Collections;
using Windows.UI.Xaml;
using Windows.UI.Xaml.Controls;
using Windows.UI.Xaml.Controls.Primitives;
using Windows.UI.Xaml.Data;
using Windows.UI.Xaml.Input;
using Windows.UI.Xaml.Media;
using Windows.UI.Xaml.Navigation;

// The Blank Page item template is documented at http://go.microsoft.com/fwlink/?LinkId=234238

namespace LifeCycleCS
{
    /// <summary>
    /// An empty page that can be used on its own or navigated to within a Frame.
    /// </summary>
    public sealed partial class MainPage : Page
    {
        public MainPage()
        {
            this.InitializeComponent();
        }

        /// <summary>
        /// Invoked when this page is about to be displayed in a Frame.
        /// </summary>
        /// <param name="e">Event data that describes how this page was reached.  The Parameter
        /// property is typically used to configure the page.</param>
        protected override void OnNavigatedTo(NavigationEventArgs e)
        {
        }

        private void btnSayHello_Click_1(object sender, RoutedEventArgs e)
        {
            this.lblGreeting.Text = string.Format("Hi {0},{1},{4}Welcome Mr./Mrs. {2} {3}!", this.txtUserName.Text, Environment.NewLine, this.txtFirstName.Text, this.txtLastName.Text, Environment.NewLine);
        }

        public string UserName
        {
            get
            {
                return this.txtUserName.Text;
            }
            set
            {
                this.txtUserName.Text = value;
            }
        }

        public string FirstName
        {
            get
            {
                return this.txtFirstName.Text;
            }
            set
            {
                this.txtFirstName.Text = value;
            }
        }

        public string LastName
        {
            get
            {
                return this.txtLastName.Text;
            }
            set
            {
                this.txtLastName.Text = value;
            }
        }
    }
}
